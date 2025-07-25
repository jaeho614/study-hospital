import { createPortal } from 'react-dom';

import styles from './appointment-modal.module.css';

export function Modal({ children, onClose }) {
  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.logoIcon}>
          <img
            src={`${import.meta.env.BASE_URL}images/icon-logo-1.png`}
            alt="모두한의원"
          />
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
}
