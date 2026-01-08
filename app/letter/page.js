'use client';

import React, { useState } from 'react';
import styles from './letter.module.css';

export default function LetterPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.envelopeWrapper} ${isOpen ? styles.flap : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) =>
          (e.key === 'Enter' || e.key === ' ') && setIsOpen(!isOpen)
        }
      >
        <div className={styles.envelope}>
          <div className={styles.letter}>
            <div className={styles.text}>
              <strong>Dear Elijah,</strong>
              <p>
                Happy 1 year anniversary baby boy♥️🥹 see how time flies like I
                promised time goes fast bad things happen yes and i told u it'll
                pass and it did ya bchbouchi zin 🫂🫂 we were always there for
                each other no matter what 🫂 you never gave up on me you've
                always did your best to make me the happiest woman ever 🫂🫂 I
                truly adore you Elijah u mean a lot to me baby حبيبي الجميل شي
                لي وعديتي كامل درتيه و جامي خيبتي ضني فيك 🫂 و كل غلطة درتيها
                صححتيها قدام عينيا 🥹 انت مش كيما كامل الرجال بصك انت راجلي و
                راجل رنا برك you're the only exception baby finding you in this
                miserable world wasn't just a coincidence 🥹 it's way more we're
                interlinked we've always been and we'll always be 🥹 I truly love
                the way you take care of my heart the way you're so gentle
                keeping it so safe, protecting me 🥹 حبيبي و روحي و حياتي و كلشي
                عندي نحبك و نموت عليك و مكانش لي يديلك بلاصتك عندي يا العزيز على
                قلبي ♥️ you'll always have a special place in Ranita's heart
                🐸♥️ I promise ... You'll always be mine 💌
              </p>
            </div>
          </div>
        </div>
        <div className={styles.heart} />
      </div>
    </div>
  );
}
