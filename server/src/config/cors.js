import cors from "cors";

const useGlobalCorsMiddleware= cors({
    origin: true,
    allowedHeaders: ['Authorization', 'Content-Type'],
    credentials: true,
    optionsSuccessStatus: 200
  })

export default useGlobalCorsMiddleware;