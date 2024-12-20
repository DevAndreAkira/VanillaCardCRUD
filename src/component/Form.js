export const Form = () => {
  return `
    <form class="my-5">
        <div class="mb-3 text-start">
            <label for="titleForm" class="form-label">Card Title</label>
            <input type="text" class="form-control" id="titleForm" aria-describedby="emailHelp" required>
        </div>
        <div class="mb-3 text-start">
            <label for="descForm" class="form-label">Card description</label>
            <input type="text" class="form-control" id="descForm" required>
        </div>
        <div class="text-end">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
    `;
};
