import { RefObject, useEffect, useState } from 'react'

type AnyEvent = MouseEvent | TouchEvent

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: AnyEvent) => void,
) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {setHasMounted(true);}, [])

  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current

      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(event.target as Node)) {
        return
      }

      handler(event)
    }

    if (hasMounted) {
      document.addEventListener(`mousedown`, listener)
      document.addEventListener(`touchstart`, listener)
    }

    return () => {
      document.removeEventListener(`mousedown`, listener)
      document.removeEventListener(`touchstart`, listener)
    }
  }, [ref, handler, hasMounted])
}


export default useOnClickOutside
