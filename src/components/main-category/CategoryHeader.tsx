
interface CategoryHeaderProps {
  categoryName: string;
  emoji: string;
  description: string;
}

const CategoryHeader = ({ categoryName, emoji, description }: CategoryHeaderProps) => {
  return (
    <div className="text-center mb-8">
      <div className="text-6xl mb-4">{emoji}</div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent cyber-glow">
        {categoryName}
      </h1>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default CategoryHeader;
