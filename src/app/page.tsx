"use client";

import { useEffect } from "react";
import { JSModule } from "zkwasm";

export default function Home() {
  useEffect(() => {
    (async () => {
      const m = await JSModule.fromPath("/zk/index.js");
      let res = await m.call("add", [24, 32]);
      console.log(res);
    })();
  }, []);

  return (
    <main>
      <h1>Hello ZkWasm</h1>
    </main>
  );
}
