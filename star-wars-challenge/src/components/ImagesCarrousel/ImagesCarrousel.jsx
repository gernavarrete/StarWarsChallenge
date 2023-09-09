"use client";

import Link from "next/link";
import species from "../../assets/media/yoda.webp";
import films from "../../assets/media/films.webp";
import people from "../../assets/media/personajes.webp";
import planets from "../../assets/media/planets.webp";
import starships from "../../assets/media/starships.webp";
import vehicles from "../../assets/media/vehicles.webp";
import Image from "next/image";
import styles from "./ImagesCarrousel.module.css";

function ImagesCarrousel() {
  const size = 250;

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.expandableImage}>
        <Link href={"/species"} className={styles.link}>
          <div className={styles.imgBx}>
            <Image src={species} width={size} height={size} alt="species" />
          </div>
          <div className={styles.content}>
            <div>
              <h2>Species</h2>
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.expandableImage}>
        <Link href={"/films"}>
          <div className={styles.imgBx}>
            <Image src={films} width={size} height={size} alt="films" />
          </div>
          <div className={styles.content}>
            <div>
              <h2>Films</h2>
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.expandableImage}>
        <Link href={"/people"}>
          <div className={styles.imgBx}>
            <Image src={people} width={size} height={size} alt="people" />
          </div>
          <div className={styles.content}>
            <div>
              <h2>Characters</h2>
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.expandableImage}>
        <Link href={"/vehicles"}>
          <div className={styles.imgBx}>
            <Image src={vehicles} width={size} height={size} alt="vehicles" />
          </div>
          <div className={styles.content}>
            <div>
              <h2>Vehicles</h2>
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.expandableImage}>
        <Link href={"/planets"}>
          <div className={styles.imgBx}>
            <Image src={planets} width={size} height={size} alt="planets" />
          </div>
          <div className={styles.content}>
            <div>
              <h2>Planets</h2>
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.expandableImage}>
        <Link href={"/starships"}>
          <div className={styles.imgBx}>
            <Image src={starships} width={size} height={size} alt="starships" />
          </div>
          <div className={styles.content}>
            <div>
              <h2>Starships</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default ImagesCarrousel;
