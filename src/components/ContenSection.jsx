import Slider from './Slider.jsx';
import './ContenSection.css';

const petungkriyonoInfo = [
    "Daerah Petungkriyono di Kabupaten Pekalongan dikenal sebagai salah satu penghasil sayuran terkemuka di Indonesia. Dengan tanah yang subur dan iklim yang mendukung, Petungkriyono menjadi tempat yang ideal untuk menanam berbagai jenis sayuran.",
    "Kentang, wortel, dan kubis merupakan komoditas unggulan dari daerah ini. Kentang Petungkriyono terkenal dengan kualitasnya yang tinggi, dengan tekstur yang sempurna dan rasa yang lezat.",
    "Wortel yang dihasilkan di sini memiliki warna cerah dan kandungan gizi yang melimpah, menjadikannya pilihan sehat untuk berbagai masakan.",
    "Sementara itu, kubis yang tumbuh subur di lereng bukit Petungkriyono memiliki rasa yang renyah dan segar, sempurna untuk dijadikan bahan salad atau lauk pendamping.",
    "Keberhasilan pertanian sayuran di Petungkriyono tidak hanya memberikan keuntungan bagi petani lokal, tetapi juga memenuhi kebutuhan pasar yang semakin meningkat.",
    "Dengan hasil yang melimpah, Petungkriyono menjadi salah satu pilar penting dalam ketahanan pangan daerah dan nasional.",
    "Mari kita dukung pertanian lokal dan nikmati hasil sayuran segar dari Petungkriyono!"
];
export default function ContenSection() {
    return (
        <div className="conten">
            <div className='text'>
                <h1>Petungkriyono Surga Sayuran yang Melimpah</h1>
                <p>{petungkriyonoInfo}</p>
            </div>
            <Slider/>
        </div>
    );
}