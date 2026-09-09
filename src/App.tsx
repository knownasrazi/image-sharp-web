import { useState } from "react";
export default function App(){
  const [file,setFile]=useState<File|null>(null);
  const [quality,setQuality]=useState(80);
  const [preview,setPreview]=useState("");
  function onFile(e:any){ const f=e.target.files?.[0]; if(f){ setFile(f); setPreview(URL.createObjectURL(f)); } }
  return (
    <main className="bg-[#fdfcfa] min-h-screen text-[#1a1a1a]">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <h1 className="text-2xl font-light">image-sharp-web</h1>
        <p className="text-sm text-[#9a9590]">Compress without upload — runs in browser.</p>
        <input type="file" accept="image/*" onChange={onFile} className="mt-4 block text-sm" />
        <div className="mt-4 flex gap-2 items-center">
          <label className="text-sm">Quality {quality}%</label>
          <input type="range" min={10} max={100} value={quality} onChange={e=>setQuality(Number(e.target.value))} />
        </div>
        {preview && <img src={preview} alt="preview" className="mt-4 max-h-64 rounded-2xl border border-[#ebe7e0]" />}
        {file && <p className="mt-2 text-xs text-[#9a9590]">{file.name} — {(file.size/1024).toFixed(1)} KB</p>}
      </div>
    </main>
  );
}
