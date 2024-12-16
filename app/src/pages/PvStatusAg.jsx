import { useState, useEffect, useRef } from 'react'
import { pdfjs, Document, Page } from 'react-pdf'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/components/PdfViewer.css'
import sic_status from '../assets/sic/files/status-epfl-sic.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function PvStatusAg() {
    // the default language of the website is english
    let storedLang = localStorage.getItem('prefered-language') ?? "EN"; 
    let [lang, changeLang] = useState(storedLang);

    function saveAndChangeLang(language) {
        switch(language) {
            case "FR":
                // it is a supported language
                break;
            case "EN":
                // it is a supported language
                break;
            default:
                // the selected language is not valid yet 
                language = "EN";
                break;
        }
        localStorage.setItem("prefered-language", language);
        changeLang(language);
    }

    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const containerRef = useRef();


    useEffect(() => {
        function handleResize() {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                setScale(containerWidth / 600); // Adjust to the base page width (800px in this case)
            }
        }
        handleResize();
        window.addEventListener("resize", () => handleResize())
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <>
            <div className="flexer">
                <section className="main">
                    <Header lang={lang} saveAndChangeLang={saveAndChangeLang} />
                    <main>
                        <h1> PV - status - AG (<a href={sic_status}>pdf</a>)</h1>
                        <div className="pdf-container" ref={containerRef}>
                            <Document file={sic_status} onLoadSuccess={onDocumentLoadSuccess}>
                                {Array(numPages).fill(0).map((elem, i) => <Page key={`page-${i}`} scale={scale} renderTextLayer={false} renderAnnotationLayer={false} pageNumber={i+1}></Page>)}
                            </Document>
                        </div>
                    </main>
                </section>
                <Footer lang={lang} saveAndChangeLang={saveAndChangeLang} />
            </div>
        </>
    )
}

export default PvStatusAg