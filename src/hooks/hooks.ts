import React, {useEffect, useState} from "react";

export const useMouse=(
    ref: React.RefObject<HTMLDivElement>,
    componentMoveClick: (e:React.MouseEvent<HTMLDivElement>) => void,
) => {
    const [toggle,setToggle]=useState(false)

    useEffect(() => {
        const handleMouseDown = (e:MouseEvent) => {
              // @ts-ignore
            if (ref.current && ref.current.contains(e.target)){
                setToggle(true)
            }
        };
        const handleMouseMove = (e:MouseEvent) => {
            if (ref.current && toggle ) {
                // @ts-ignore
                componentMoveClick(e );
            }
        };
        const handleMouseUp = (e:MouseEvent) => {
            // @ts-ignore
           if (ref.current && !ref.current.contains(e.target)){
              setToggle(false)
           }
        };
        document.addEventListener('mousedown', handleMouseDown );
        document.addEventListener('mousemove', handleMouseMove );
         document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown );
            document.removeEventListener('mousemove', handleMouseMove );
            document.removeEventListener('mouseup', handleMouseUp)
        };
    }, [componentMoveClick, ref, toggle]);
};