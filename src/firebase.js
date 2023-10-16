/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore, doc, getDoc, setDoc, collection, writeBatch,
  query, getDocs, addDoc, serverTimestamp
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

export const db = getFirestore(app);

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

export const getPopularProducts = async () => {
  const collectionRef = collection(db, 'popularProducts');
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

  // console.log(userDocRef);

  const usersnapshot = await getDoc(userDocRef);
  // console.log(usersnapshot);
  // console.log(usersnapshot.exists());

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



//this method create new order for each user 
// export const addOrderToFirestorewithNewDocs = async (user, displayName, email, totalAmount, totalItem,cart,PaymentId) => {
//   try {
//     // const date = new Date();
//     // const time = date.getTime();

//     const documentRef = doc(db, "orders", user?.uid);

//     const data = {
//       BuyerName: displayName,
//       BuyerEmail: email,
//       BuyerAddress: 'address',
//       BuyerPayment: totalAmount,
//       BuyerQuantity: totalItem,
//       PaymentIntentId: PaymentId,
//       PaymentIntentStatus: "succeeded",
//       name: displayName,
//       email: email,
//       createdAt: serverTimestamp(),
//       cart:cart
//     };
//     await setDoc(documentRef, data)
//     console.log("Document added successfully.");
//   } catch (err) {
//     console.error('errororders', err);
//   }
// };



function generateUniqueOrderId() {
  // Get the current timestamp
  const timestamp = Date.now();

  // Generate a random number (you can customize the length)
  const randomPart = Math.floor(Math.random() * 1000000);

  // Combine timestamp and random number to create a unique ID
  const orderId = `${timestamp}-${randomPart}`;

  return orderId;
}


export const addOrderToFirestore = async (user, displayName, email, totalAmount, totalItem, cart, PaymentId) => {
  try {
    // Create a reference to the user's document
    const userDocRef = doc(db, "users", user?.uid);

    // Generate a unique order ID (you can customize this logic)
    const orderId = generateUniqueOrderId(); // Implement your own logic for generating unique order IDs

    // Create a reference to the user's order subcollection
    const userOrdersCollection = collection(userDocRef, "orders");

    // Create a reference to the order document within the user's order subcollection
    const orderDocRef = doc(userOrdersCollection, orderId);

    // Define order data
    const orderData = {
      orderId: orderId,
      BuyerName: displayName,
      BuyerEmail: email,
      BuyerAddress: 'address',
      BuyerPayment: totalAmount,
      BuyerQuantity: totalItem,
      PaymentIntentId: PaymentId,
      PaymentIntentStatus: "succeeded",
      name: displayName,
      email: email,
      createdAt: serverTimestamp(),
      cart: cart,
    };

    // Use setDoc to create the order document within the user's order subcollection
    await setDoc(orderDocRef, orderData);

    console.log("Order document added successfully.");
  } catch (err) {
    console.error('errororders', err);
  }
};


export async function getOrdersForUser(userId) {
  // Create a reference to the user's document
  const userDocRef = doc(db, "users", userId);

  // Create a reference to the user's "orders" subcollection
  const userOrdersCollection = collection(userDocRef, "orders");

  // Create a query to get all orders for the user
  const userOrdersQuery = query();

  // Execute the query and get the documents
  const querySnapshot = await getDocs(userOrdersCollection);
  console.log('query', querySnapshot);
  const orders = [];
  querySnapshot.forEach((doc) => {
    // Extract the order data from each document
    const orderData = doc.data();
    console.log('orderData', orderData);
    orders.push(orderData);
  });

  return orders;
}
