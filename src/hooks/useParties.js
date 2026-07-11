// Live Firestore listener (onSnapshot) for nearby parties
import { useEffect, useState, useCallback } from "react";
import {
    subscribeToPartiesByHost,
    createParty as createPartyDoc,
} from "../firebase/parties";

/**
 * Live list of parties hosted by a given user (their own uid).
 */
export function useMyParties(uid) {
    const [parties, setParties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!uid) {
            setParties([]);
            setLoading(false);
            return;
        }

        setLoading(true);
        const unsubscribe = subscribeToPartiesByHost(
            uid,
            (liveParties) => {
                setParties(liveParties);
                setLoading(false);
            },
            () => setLoading(false)
        );

        return unsubscribe;
    }, [uid]);

    return { parties, loading };
}

/**
 * Handles submitting a new party, with its own loading/error state so a
 * form can disable its submit button and show a message on failure.
 */
export function useCreateParty() {
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const createParty = useCallback(async (partyData) => {
        setSubmitting(true);
        setError(null);
        try {
            return await createPartyDoc(partyData);
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setSubmitting(false);
        }
    }, []);

    return { createParty, submitting, error };
}