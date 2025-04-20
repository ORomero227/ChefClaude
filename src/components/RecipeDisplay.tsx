import ReactMarkDown from "react-markdown";

type Props = {
  recipe?: string;
};

const markdownComponents = {
  p: (props: any) => <p className="my-6 text-pretty" {...props} />,
  ul: (props: any) => <ul className="p-2 list-none leading-loose" {...props} />,
  ol: (props: any) => (
    <ol
      className="p-2 space-y-4 list-decimal list-inside text-pretty"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3 className="text-2xl font-inter font-semibold text-black" {...props} />
  ),
  h4: (props: any) => <h4 className="text-xl font-bold my-4" {...props} />,
};

function RecipeDisplay({ recipe }: Props) {
  return (
    <div>
      <article className="font-inter text-[#475467] leading-7 text-lg font-normal">
        <ReactMarkDown components={markdownComponents}>{recipe}</ReactMarkDown>
      </article>
    </div>
  );
}

export default RecipeDisplay;
