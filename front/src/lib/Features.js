const fileFormat = (url = "") => {
  const fileExt = url.split(".").pop();

  if (fileExt === "mp4" || fileExt === "webm" || fileExt === "ogg") {
    return "video";
  }
  if (fileExt === "mp3" || fileExt === "wav") {
    return "audio";
  }
  if (
    fileExt === "jpg" ||
    fileExt === "png" ||
    fileExt === "gif" ||
    fileExt === "jpeg"
  )
    return "image";
  return "file";
};

const transformImage = (url = "", width = 100) => {
  return `${url}?width=${width}`;
};

export { fileFormat, transformImage };
