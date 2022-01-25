class CloudinaryService {
  async processFile(file) {
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "opxr0t1q");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dwog6b9zt/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    // console.log(response.json());
    return await response.json();
  }
}
export default CloudinaryService;
