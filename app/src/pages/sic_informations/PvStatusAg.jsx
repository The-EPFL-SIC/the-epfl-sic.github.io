import { useState, useEffect, useRef } from 'react'
import { pdfjs, Document, Page } from 'react-pdf'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../styles/components/PdfViewer.css'
import sic_status from '../../assets/sic/files/status-epfl-sic.pdf'
import sic_status_signed from '../../assets/sic/files/status-epfl-sic-signed.pdf'
import sic_ag_signed from '../../assets/sic/files/ag-epfl-sic-signed.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function PvStatusAg() {
    // the default language of the website is english
    let storedLang = localStorage.getItem('prefered-language') ?? "EN"; 
    let [lang, changeLang] = useState(storedLang);

    useEffect(function() {
        window.scrollTo(0, 0);
        document.title = `${(lang === "FR")? "status" : "status"} | EPFL Sustainable Innovation Challenge`;
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
    const PV_AG_ELEMENTS_LOCALE = {
        "description": {
            "FR" : "Nous sommes une association à but non lucratif de l'EPFL. Vous pouvez trouver les documents signés de nos statuts ainsi que du compte rendu de notre dernière assemblée générale en cliquant sur les boutons ci-dessous.",         
            "EN": "We are a nonprofit association at EPFL. You can find the signed documents for both our statutes and the minutes of our most recent general assembly by clicking the buttons below."
        },
        "ag-title": {
            "FR": "PV AG",
            "EN": "GA minutes"
        },
        "status-title": {
            "FR": "Statuts",
            "EN": "Statutes"
        }};
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
                        <h1>
                            {PV_AG_ELEMENTS_LOCALE["description"][lang]}
                        </h1>
                        <h1> (<a href={sic_ag_signed}>{PV_AG_ELEMENTS_LOCALE["ag-title"][lang]}</a>) - (<a href={sic_status_signed}>{PV_AG_ELEMENTS_LOCALE["status-title"][lang]}</a>)</h1>
                        {/* 
                         <div className="pdf-container" ref={containerRef}>
                             <Document file={sic_status} onLoadSuccess={onDocumentLoadSuccess}>
                                 {Array(numPages).fill(0).map((elem, i) => <Page key={`page-${i}`} scale={scale} renderTextLayer={false} renderAnnotationLayer={false} pageNumber={i+1}></Page>)}
                             </Document>
                         </div>
                         */}
                    </main>
                </section>
                <Footer lang={lang} saveAndChangeLang={saveAndChangeLang} />
            </div>
        </>
    )
}

export default PvStatusAg