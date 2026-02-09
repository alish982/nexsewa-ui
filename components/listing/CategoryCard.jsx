import Link from "next/link";
import Image from "next/image";

export const CategoryCard = ({ category }) => {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="
        group block
        rounded-xl border
        p-4
        hover:shadow-md
        transition
        bg-white
      "
    >
      <div className="flex flex-col items-center text-center gap-3">
        <h3 className="font-semibold text-gray-800">{category.name}</h3>

        {category.itemCount !== undefined && (
          <p className="text-sm text-gray-500">{category.itemCount} items</p>
        )}
        <div className="relative w-full h-[140px]">
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(max-width:768px) 50vw, (max-width:1024px) 25vw, 20vw"
            className="object-contain group-hover:scale-105 transition"
          />
        </div>
      </div>
    </Link>
  );
};
