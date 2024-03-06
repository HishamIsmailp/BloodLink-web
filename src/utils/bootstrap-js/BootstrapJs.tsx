<<<<<<< HEAD
"use client"
=======
'use client'
>>>>>>> 5e8c1448d3ca40723d12ea23f3dd1b809ab0769a
import { useEffect } from "react";

export default function BootstrapJs() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
}