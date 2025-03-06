import cors from "cors";

const useGlobalCors= cors({
    origin: true,
    allowedHeaders: ['Authorization', 'Content-Type'],
    credentials: true,
    optionsSuccessStatus: 200
  })

export default useGlobalCors;