import React, { useEffect, useState } from 'react';

const Fade = ({ visible, children, duration = 1300 }) => {
    const [showChildren, setShowChildren] = useState(visible);

    useEffect(() => {
        if (visible) {
            setShowChildren(true);
        } else {
            // On laisse l'animation se dérouler avant de le masquer
            const timer = window.setTimeout(() => {
                setShowChildren(false);
            }, duration);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [duration, visible]);

    const className = `fade ${visible ? '' : 'out'}`.trim();
    return <div className={className}>{showChildren && children}</div>;
};
export default Fade;
