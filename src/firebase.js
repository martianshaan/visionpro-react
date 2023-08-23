/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore, doc, getDoc, setDoc, collection, writeBatch,
  query, getDocs,
} from 'firebase/firestore';
// import {
//   getStorage, ref, listAll, getDownloadURL,
// } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDYDZSoLpY090X43ETkxrXNBbpJR-w4w2Y',
  authDomain: 'visionpro-auth.firebaseapp.com',
  projectId: 'visionpro-auth',
  storageBucket: 'visionpro-auth.appspot.com',
  messagingSenderId: '398060853531',
  appId: '1:398060853531:web:61c51d0c053f3fc7aa1bbe',
  measurementId: 'G-2XY7ZQ3VLD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

export const db = getFirestore();

// const storage = getStorage();

// export const uploadImageAndGetUrl = async (image) => {
//   const storageRef = ref(storage, `categoryImages/${image.name}`);
//   await uploadBytes(storageRef, image);
//   return getDownloadURL(storageRef);
// };

// export async function updateCategoryImagesWithUrls(categories) {
//   const categoriesWithImageUrls = await Promise.all(
//     categories.map(async (category) => {
//       const imageUrl = await uploadImageAndGetUrl(category.categoryImg);
//       return {
//         ...category,
//         categoryImg: imageUrl,
//       };
//     }),
//   );

//   return categoriesWithImageUrls;
// }

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.id); // Use the unique _id as the document ID
    batch.set(docRef, object);
  });

  try {
    await batch.commit();
    console.log('Data successfully added to Firestore.');
  } catch (error) {
    console.error('Error adding data to Firestore:', error);
  }
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const categoryData = docSnapshot.data();
    const { categoryName } = categoryData;
    acc[categoryName] = categoryData; // Store the entire category data in the map
    return acc;
  }, {});

  return categoryMap;
};

export const getProductsandDocuments = async () => {
  const collectionRef = collection(db, 'products');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoryMap = {};

  querySnapshot.forEach((docSnapshot) => {
    const categoryData = docSnapshot.data();
    const { id } = categoryData;
    categoryMap[id] = categoryData; // Store the entire category data in the map
  });

  return categoryMap;
};
/*
download iamges url from storage
const storage = getStorage();
const myPicks = ref(storage, 'gs://visionpro-auth.appspot.com/products');

listAll(myPicks)
  .then(async (res) => {
    const { items } = res;
    const urls = await Promise.all(
      items.map((item) => getDownloadURL(item)),
    );

    // Array of download URLs of all files in that folder
    console.log(urls);
  })
  .catch((error) => {
    // Uh-oh, an error occurred!
    console.log(error);
  });

*/

export const createUserDocumentFromAuth = async (userAuth, additionalData) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const usersnapshot = await getDoc(userDocRef);
  console.log(usersnapshot);
  console.log(usersnapshot.exists());

  if (!usersnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // eslint-disable-next-line no-trailing-spaces
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating the user', error.messagingSenderId);
    }
  }

  return userDocRef;
};
