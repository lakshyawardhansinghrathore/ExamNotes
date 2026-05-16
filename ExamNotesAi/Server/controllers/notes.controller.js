import mongoose from "mongoose";
import Notes from "../models/notes.model.js";


// GET ALL USER NOTES
export const getMyNotes = async (req, res) => {

    try {

        const notes = await Notes.find({
            user: req.userId
        })
            .select(
                "topic classLevel examType revisionMode includeDiagram includeChart createdAt"
            )
            .sort({ createdAt: -1 });

        return res.status(200).json(notes);

    } catch (error) {

        console.log("getMyNotes error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch notes"
        });
    }
};


// GET SINGLE NOTE
export const getSingleNotes = async (req, res) => {

    try {

        const { id } = req.params;

        // VALIDATE MONGODB OBJECT ID
        if (!mongoose.Types.ObjectId.isValid(id)) {

            return res.status(400).json({
                success: false,
                message: "Invalid note ID"
            });
        }

        const note = await Notes.findOne({
            _id: id,
            user: req.userId
        });

        if (!note) {

            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }

        return res.status(200).json({
            success: true,
            content: note.content,
            topic: note.topic,
            createdAt: note.createdAt
        });

    } catch (error) {

        console.log("getSingleNotes error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch note"
        });
    }
};