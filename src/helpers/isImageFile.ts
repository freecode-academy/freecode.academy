export const isImageFile = (file: File): boolean => {
  return file.type.startsWith('image/')
}
