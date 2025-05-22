import Image from "next/image";
import CalendarRange from "./components/CalendarRange";

export default function Home() {
  return (
    <div>
      <p>✅EN: This is a CalendarRange component with format data PTBR</p>
      <p>
        ✅PT-BR: Este é um componente de calendário com data de início e fim
        para selecionar ou informar manualmente nos inputs .
      </p>

      <CalendarRange />
    </div>
  );
}
