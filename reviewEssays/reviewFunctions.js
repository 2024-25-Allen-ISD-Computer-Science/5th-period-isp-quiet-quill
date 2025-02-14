import { doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from './firebase-config';

const firebaseConfig = {
    apiKey: "AIzaSyDtWQvR0g7glI6UmARjzbPqbqWor-1RGbI",
    authDomain: "quiet-quill-d2bf0.firebaseapp.com",
    projectId: "quiet-quill-d2bf0",
    storageBucket: "quiet-quill-d2bf0.firebasestorage.app",
    messagingSenderId: "722653771174",
    appId: "1:722653771174:web:d830bad6b8adb07b9e0b67"
};

const app = initializeApp(firebaseConfig);
const auth = firebase.auth();

export const addReview = async (essayID, comment, rating, reviewerID, reviewerName) => {
  try {
    const reviewID = doc(db, "essays", essayID, "reviews").id;
    const reviewRef = doc(db, "essays", essayID, "reviews", reviewID);
    const reviewData = {
      comment: comment,
      rating: rating,
      reviewerID: reviewerID,
      reviewerName: reviewerName,
      reviewID: reviewID,
      createdAt: new Date().toISOString(),
    };
    await setDoc(reviewRef, reviewData); // Add the review to Firestore
    console.log("Review added successfully!");
  } catch (error) {
    console.error("Error adding review: ", error);
  }
};

export const editReview = async (essayID, reviewID, updatedComment, updatedRating) => {
  try {
    const reviewRef = doc(db, "essays", essayID, "reviews", reviewID);

    const updatedReviewData = {
      comment: updatedComment,
      rating: updatedRating,
      updatedAt: new Date().toISOString(),
    };

    await updateDoc(reviewRef, updatedReviewData);

    console.log("Review updated successfully!");
  } catch (error) {
    console.error("Error updating review: ", error);
  }
};

export const removeReview = async (essayID, reviewID) => {
  try {
    const reviewRef = doc(db, "essays", essayID, "reviews", reviewID);

    await deleteDoc(reviewRef);

    console.log("Review deleted successfully!");
  } catch (error) {
    console.error("Error deleting review: ", error);
  }
};