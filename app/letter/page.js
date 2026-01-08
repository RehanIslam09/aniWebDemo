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
                Happy 1-year anniversary, my baby 🥹❤️ Look how fast time flies.
                Just like I promised you, time moves quickly — bad things
                happen, but they always pass… and they did. 🤍 We’ve always been
                there for each other, no matter what 🫂🫂 You never gave up on
                me. You always tried your best to make me the happiest woman
                alive, and that means everything to me 🥹🫂 I truly adore you,
                Aiden. You mean so much to me, my love.
                คุณคือคนที่รักษาสัญญาทุกอย่างที่ให้ไว้
                และไม่เคยทำให้ฉันผิดหวังเลย 🥹 ทุกความผิดพลาดที่เคยเกิดขึ้น
                คุณแก้ไขมันด้วยความจริงใจ ต่อหน้าฉันเสมอ You’re not like
                everyone else — because you’re my man, the only one for me.
                You’re my safe place, my strength, my heart 🫶 Finding you in
                this miserable world wasn’t a coincidence 🥹 It’s something
                deeper — like our souls were always connected, and always will
                be. I truly love the way you take care of my heart — how gentle
                you are with it, how you protect me and keep me safe 🥹
                ที่รักของฉัน ชีวิตของฉัน ทุกอย่างของฉัน —
                ฉันรักคุณมากกว่าคำพูดใดๆ จะอธิบายได้ 💗 You’ll always have a
                special place in my heart 🐸❤️ I promise… you’ll always be mine
                💌
              </p>
            </div>
          </div>
        </div>
        <div className={styles.heart} />
      </div>
    </div>
  );
}
