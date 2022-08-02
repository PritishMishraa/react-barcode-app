import Footer from "./components/Footer";
import { useBarcode } from "next-barcode";
import { useState } from "react";

function App() {
  const [text, setText] = useState('No barcode preview')
  const [disabled, setDisabled] = useState(true)

  const { inputRef } = useBarcode({
    value: text,
    options: {
      background: '#ffffff',
      fontSize: 25,
      height: 120,
      width: 1,
      fontOptions: "bold",
    }
  });

  const downloadBarcode = () => {
    console.log('hello')
    const canvas = document.getElementById("mybarcode");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${text}-barcode.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleChange = (e) => {
    if (e.target.value) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
    setText(e.target.value ? e.target.value : 'No barcode preview')

  }

  return (
    <div className="App max-h-full max-w-screen">
      <div className="gradient" />
      <main className="flex flex-col items-center justify-center">
        <h1 className="p-5 m-7 lg:text-6xl text-4xl mb-28 font-extrabold text-center">Get your own barcode!</h1>
        <canvas id="mybarcode" ref={inputRef} />
        <input onChange={handleChange} type="text" placeholder="type your text here" className="text-center justify-center m-5 mt-24 bg-gray-50 border border-gray-300 text-gray-900 lg:text-xl rounded-lg p-2.5" />
      </main>
      <div className="flex space-x-2 justify-center m-5">
        <button onClick={downloadBarcode} type="button" disabled={disabled} className="disabled:bg-gray-500 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Download</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;