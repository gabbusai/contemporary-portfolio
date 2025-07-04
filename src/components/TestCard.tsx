import { motion } from "motion/react";

type testCardProps = {
  title: string;
  description: string;
}

export default function TestCard({ title, description }: testCardProps){
  return (
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg h-[650px] w-[500px] gap-x-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </motion.div>
  );
}