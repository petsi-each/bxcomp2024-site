export function getFileFromPublic({ filePath }: { filePath: string }):string{
    return process.env.NODE_ENV === "production" ? '/bxcomp2024-site'+filePath : filePath;
}