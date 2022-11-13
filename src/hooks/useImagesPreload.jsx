import { useEffect, useState } from 'react'

function useImagesPreload(imgs) {
  const [isLoading, setIsLoading] = useState(true);
  const cacheImages = async(srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);

    setIsLoading(false);
  }

  useEffect(() => {
    cacheImages(imgs)
  }, [])

  return isLoading
}

export default useImagesPreload