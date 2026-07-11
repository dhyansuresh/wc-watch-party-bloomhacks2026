// Firestore reads/writes for watch parties.

import {
    collection,
    addDoc,
    deleteDoc,
    doc,
    query,
    where,
    onSnapshot,
    serverTimestamp,
} from "firebase/firestore";
import { db } from "./config";

const PARTIES_COLLECTION = "parties";

/**
 * Creates a new party document. Returns the new document's id.
 */
export async function createParty(partyData) {
    const docRef = await addDoc(collection(db, PARTIES_COLLECTION), {
        ...partyData,
        attendeeCount: 1,
        createdAt: serverTimestamp(),
    });
    return docRef.id;
}

/**
 * Permanently deletes a party document by id.
 */
export async function deleteParty(partyId) {
    await deleteDoc(doc(db, PARTIES_COLLECTION, partyId));
}

/**
 * Subscribes to every party hosted by a given user, live. Returns an
 * unsubscribe function.
 */
export function subscribeToPartiesByHost(hostId, onUpdate, onError) {
    const partiesQuery = query(
        collection(db, PARTIES_COLLECTION),
        where("hostId", "==", hostId)
    );

    return onSnapshot(
        partiesQuery,
        (snapshot) => {
            const parties = snapshot.docs.map((doc) => ({
                partyId: doc.id,
                ...doc.data(),
            }));
            onUpdate(parties);
        },
        onError
    );
}