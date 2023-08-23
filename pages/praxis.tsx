import SlideShow from '@/components/slideShow';

export default function PraxisPage() {
  return (
    <div className="pt-5">
      <h2 className="text-center text-2xl sm:text-4xl text-primary">
        Unsere Praxis
      </h2>
      <div className="mt-5">
        <SlideShow />
      </div>
      <div className="max-w-screen-md mx-auto px-3 py-5 text-gray-500 flex flex-col gap-2 text-justify">
        <p>
          Unsere Praxis hat im Jahr 2023 eine umfassende Renovierung erfahren.
          Wir sind stolz darauf, Ihnen eine zeitgemäße und einladende Umgebung
          mit höchstem technischen Standard bieten zu können.
        </p>
        <p>
          Für die kleinen Besucher haben wir eine Kinderspielecke im Wartezimmer
          eingerichtet, in der sie sich während Ihres Besuchs vergnügen können.
        </p>
        <p>
          Ein barrierefreier Zugang ist uns ein wichtiges Anliegen, daher ist
          die Praxis mit einem Aufzug erreichbar und behindertengerecht
          gestaltet. So stellen wir sicher, dass auch Menschen mit
          eingeschränkter Mobilität mühelos unsere Räumlichkeiten erreichen
          können.
        </p>
      </div>
    </div>
  );
}
