import markerIcon from '../images/marker.png';

export default function Entry({ entry }) {
    const { img, country, googleMapsLink, title, dates, text } = entry;
    // dùng JavaScript's object destructuring assignment
    return (
        console.log(entry),
        <article className="journal-entry">
            <div className="main-image-container">
                <img
                    className="main-image"
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                />
            </div>
            <div className="info-container">
                <div className="location">
                    <img
                        className="marker"
                        src={markerIcon}
                        alt=""
                        aria-hidden="true"
                    />
                    <span className="country">{country}</span>
                    <a
                        className="google-maps-link"
                        href={googleMapsLink}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`View ${title} on Google Maps`}
                    >
                        View on Google Maps
                    </a>
                </div>
                <h2 className="entry-title">{title}</h2>
                <p className="trip-dates">{dates}</p>
                <p className="entry-text">{text}</p>
            </div>
        </article>
    );
}
