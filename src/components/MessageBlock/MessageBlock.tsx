import { ReactNode } from "react";
import s from '@/styles/MessageBlock/MessageBlock.module.css';

export default function MessageBlock({ children }: { children: ReactNode }) {
  return (
    <section>
      <div className={`container ${s.MessageBlockContainer}`}>
        <p className="font-description-2">{children}</p>
      </div>
    </section>
  );
}
