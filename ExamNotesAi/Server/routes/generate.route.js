import express from 'express';
import isAuth from '../middleware/isAuth.js';
import { generateNotes } from '../controllers/generate.controller.js';
// 👇 Added getSingleNotes to this import!
import { getMyNotes, getSingleNotes } from '../controllers/notes.controller.js'; 

const notesRouter = express.Router();

notesRouter.post("/generate-notes", isAuth, generateNotes);
notesRouter.get("/getnotes", isAuth, getMyNotes);
notesRouter.get("/:id", isAuth, getSingleNotes);

export default notesRouter;