import image from '@/public/images/services/ears.jpg';
import Image from 'next/image';

export default function EarsServicesPage() {
  return (
    <>
      <header>
        <div className="w-full h-[25vh] sm:h-[33vh]">
          <Image
            src={image}
            alt="Title Image"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl sm:text-4xl text-primary my-2 text-center">
          Ohren
        </h1>
      </header>
      <main className="max-w-screen-lg mx-auto px-3 text-lg flex flex-col gap-3 mb-10 text-justify">
        <p>
          Das Ohr ist ein komplexes Sinnesorgan, das nicht nur für unser
          Hörvermögen, sondern auch für unseren Gleichgewichtssinn und die
          Kommunikationsfähigkeit von großer Bedeutung ist. Hörverlust,
          Ohrinfektionen, Tinnitus, Schwindel und Ohrenschmerzen werden von uns
          diagnostiziert und behandelt. Besonders eine frühzeitige bzw.
          regelmäßige Vorstellung bei Hörproblemen ist essentiell, um eine
          Verschlechterung des Hörvermögens zu verhindern.
        </p>
        <b className="text-primary mt-3">Diagnostik:</b>
        <ul className="list-disc list-inside">
          <li>Mikroskopie des Ohres</li>
          <li>Tonaudiometrie (Hörtest)</li>
          <li>Hörgeräte-Verordnung</li>
          <li>Hörsturz-Diagnostik</li>
          <li>Tinnitus-Diagnostik</li>
          <li>Neugeborenen-Screening</li>
          <li>Hirnstammaudiometrie (BERA)</li>
          <li>Otoakustische Emissionen (OAE)</li>
          <li>Tympanometrie (Mittelohrdruckmessung)</li>
          <li>Tubenfunktionsprüfung (z.B. Prüfung auf Tauchtauglichkeit )</li>
          <li>Schwindel-Diagnostik</li>
        </ul>
        <b className="text-primary mt-3">Hörgeräteverordnung:</b>
        <p>
          Circa ab dem 50. Lebensjahr nimmt die natürliche Leistungsfähigkeit
          des Gehörs auf beiden Ohren ab. Hierbei kommt es zu einer reduzierten
          Funktion der Haarzellen im Innenohr, was nicht rückgängig zu machen
          ist. Trotzdem besteht die Option, die verbleibende Funktion dieser
          kleinen Haarzellen mit einem Hörgerät zu fördern, was dazu führen
          kann, das Gehör zu verbessern.
        </p>
        <b className="text-primary mt-3">Ablauf der Hörgeräteverordnung:</b>
        <ol className="list-decimal list-inside">
          <li>
            In unserer Praxis führen wir gezielte Hörtests und Untersuchungen
            durch, um die genaue Art Ihrer Hörstörung und zu ermitteln, ob ein
            Hörgerät notwendig ist.{' '}
          </li>
          <li>Sie erhalten einen schriftlichen Nachweis für den Akustiker</li>
          <li>
            In Kooperation mit dem Akustiker haben Sie die Möglichkeit
            verschiedene Geräte auszuprobieren und sich für ein passendes Gerät
            zu entscheiden.
          </li>
          <li>
            In der Praxis können wir überprüfen, ob das ausgewählte Gerät den
            Anforderungen für Ihre Bedürfnisse entspricht.
          </li>
        </ol>
        <b className="text-primary mt-3">Ohrreinigung bei Hörgeräteträgern:</b>
        <p>
          Es empfiehlt sich nun, regelmäßige Kontrolltermine in unserer Praxis
          zu vereinbaren, um entstandenen Ohrenschmalz zu entfernen. Die
          veränderte Luftzirkulation im Gehörgang führt zu einer erhöhten
          Bildung von Ohrenschmalz. Neben der hygienischen Bedeutung kann dies
          zu einem unangenehmen Juckreiz führen und die Geräte leicht
          verstopfen.
        </p>
      </main>
    </>
  );
}
