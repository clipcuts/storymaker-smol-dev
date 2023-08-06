Shared Dependencies:

1. Exported Variables:
   - `gedcomData`: The data extracted from the uploaded GEDCOM file.
   - `mainCharacter`: The main character selected by the user.
   - `movieData`: The data of the movie being created, including slides and their settings.
   - `renderProgress`: The progress of the movie rendering process.

2. Data Schemas:
   - `GedcomSchema`: The schema for the GEDCOM data.
   - `CharacterSchema`: The schema for the main character data.
   - `SlideSchema`: The schema for the slide data.
   - `MovieSchema`: The schema for the movie data.

3. ID Names of DOM Elements:
   - `fileInput`: The file input for the GEDCOM file.
   - `characterInput`: The input for the main character.
   - `moviePreview`: The movie preview section.
   - `slideList`: The list of slides.
   - `slide-{id}`: The individual slide elements.
   - `slidePart-{id}`: The individual slide part elements.
   - `settings-{id}`: The settings for slides and their parts.
   - `renderButton`: The render button.
   - `progressBar`: The progress bar.

4. Message Names:
   - `UPLOAD_SUCCESS`: Message when GEDCOM file is successfully uploaded.
   - `CHARACTER_SELECTED`: Message when main character is selected.
   - `SLIDE_ADDED`: Message when a new slide is added.
   - `SLIDE_UPDATED`: Message when a slide is updated.
   - `RENDER_STARTED`: Message when movie rendering starts.
   - `RENDER_PROGRESS`: Message for updating render progress.
   - `RENDER_COMPLETED`: Message when movie rendering is completed.

5. Function Names:
   - `uploadGedcom`: Function to handle GEDCOM file upload.
   - `selectCharacter`: Function to handle main character selection.
   - `addSlide`: Function to add a new slide.
   - `updateSlide`: Function to update a slide.
   - `startRender`: Function to start movie rendering.
   - `updateRenderProgress`: Function to update render progress.
   - `completeRender`: Function to handle render completion.