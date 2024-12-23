import { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { pdfjs, Document, Page } from 'react-pdf'
import sic_chart from '../assets/sic/files/charte-epfl-sic.pdf'
import '../styles/components/PdfViewer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function OurEngagement() {
    // the default language of the website is english
    let storedLang = localStorage.getItem('prefered-language') ?? "EN"; 
    let [lang, changeLang] = useState(storedLang);

    useEffect(function() {
        window.scrollTo(0, 0);
        document.title = `${(lang === "FR")? "notre engagement" : "our engagement"} | EPFL Sustainable Innovation Challenge`;
    }, [])

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

    const ENGAGEMENT_ELEMENTS_LOCALE = {
        "title": {
            "FR": "Notre engagement",
            "EN": "Our engagement"
        }
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
                        <h1>{ENGAGEMENT_ELEMENTS_LOCALE["title"][lang]} (<a href={sic_chart}>pdf</a>)</h1>
                        <div className="pdf-container" ref={containerRef}>
                            <Document file={sic_chart} onLoadSuccess={onDocumentLoadSuccess}>
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

export default OurEngagement