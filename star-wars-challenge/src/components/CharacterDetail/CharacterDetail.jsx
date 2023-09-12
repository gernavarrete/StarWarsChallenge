import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function CharacterDetail() {
  const dataCharacter = useSelector(
    (state) => state.storeReducer.dataCharacter
  );

  const [imageCharacter, setImageCharacter] = useState("");

  useEffect(() => {
    const characterName = dataCharacter?.name;
    if (characterName !== null) {
      async function getcharacterName(name) {
        const responseImage = await fetch(
          `https://api.unsplash.com/search/photos/?client_id=8FqLdXpxkVyq0V-gJ74kweLZ_sv-IONjskYq93m7E3c&page=1&query=${name}`
        );

        const dataImage = await responseImage.json();
        console.log(dataImage);
        setImageCharacter(dataImage.results[7].urls.small);
      }
      getcharacterName(characterName);
    }
  }, [dataCharacter]);

  return (
    <div>
      <img src={imageCharacter} width={200} height={200} />
    </div>
  );
}
export default CharacterDetail;
