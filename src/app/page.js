import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>test h1</h1>
      <h1>The quick brown fox jumps over the lazy dog</h1>
      <h2>test h2</h2>
      <h2>The quick brown fox jumps over the lazy dog</h2>
      <h3>test h3</h3>
      <h3>The quick brown fox jumps over the lazy dog</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
        vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
        laoreet viverra, tortor libero sodales leo
      </p>
      <button>test</button>

      <p>add image + link to test routing + deploy</p>
    </div>
  );
}
