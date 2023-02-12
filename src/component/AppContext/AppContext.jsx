import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Firebase/firebase'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { db } from '../Firebase/firebase'
import { addDoc, collection, doc, getDoc, serverTimestamp, setDoc, onSnapshot, orderBy, query } from 'firebase/firestore';

const AppContext = createContext(null)

export const useAppContext = () => {
    const context = useContext(AppContext)
    if (context === undefined) {
        throw new Error('Appcontext not in appContextProvider')
    }
    return context;
}

export default function AppContextProvider({ children }) {
    const [libraryItem, setLibraryItem] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [loginStatus, setLoginStatus] = useState(false);
    const [getBooksData, setGetBooksData] = useState([]);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => { //get currently signed in user
            setCurrentUser(user);
            if (user !== null) {
                setLoginStatus(true);
            } else {
                setLoginStatus(false);
            }
            const getBooks = await getDoc(doc(db, "Books", user.uid)) //get data from firebase
            if (getBooks.exists()) {
                setGetBooksData(getBooks.data().library);
                setLibraryItem(getBooks.data().library);
            } else {
                console.log("No such document!");
            }
        })
    }, []);

    useEffect(() => {
        const uploadBooks = async () => {
            await setDoc(doc(db, "Books", currentUser.uid), { //add data to firestore
                library: libraryItem,
            })

            const getBooks = await getDoc(doc(db, "Books", currentUser.uid))
            if (getBooks.exists()) {
                setGetBooksData(getBooks.data().library);
                if (libraryItem.length === getBooks.data().library.length) {
                    return true;
                }
                else {
                    setLibraryItem(getBooks.data().library);
                }
            } else {
                // doc.data() undefined
                console.log("No such document!");
            }
        }
        uploadBooks();
    }, [libraryItem])

    const addToLibrary = (book) => {
        setLibraryItem([...libraryItem, book])
    }

    const removeFromLibrary = (id) => {
        const oldLibraryItem = [...libraryItem];
        const newLibraryItem = oldLibraryItem.filter((book) => book.id !== id);
        setLibraryItem(newLibraryItem);
    }

    const sendMessage = async (roomId, currentUser, text) => {
        try {
            await addDoc(collection(db, 'group-rooms', roomId, 'message'), { //create a document by auto ID
                uid: currentUser.uid,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL,
                text: text.trim(),
                timestamp: serverTimestamp(),
            })
        } catch (err) {
            console.log(err);
        }
    }
    const getMessage = (roomId, callback) => {
        const q = query(collection(db, "group-rooms", roomId, 'message'), orderBy('timestamp', 'asc')); //get realtime updates
        return onSnapshot(q, (querySnapshot) => {
            const message = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            callback(message);
        });
    };

    return (
        <AppContext.Provider value={{ getBooksData, libraryItem, setLibraryItem, addToLibrary, removeFromLibrary, currentUser, loginStatus, setLoginStatus, sendMessage, getMessage }}>
            {children}
        </AppContext.Provider>
    )
}
