type PrizeLogger = (string) => void

enum Category {
    BUSINESS_ANALYST,
    DEVELOPER,
    DESIGNER,
    QA,
    SCRUM_MASTER
}

interface Employee {
    id: number,
    name: string,
    surname: string,
    available: boolean,
    salary: number,
    category: Category,
    markPrize: PrizeLogger
}

const logPrize: PrizeLogger = (check) => console.log(check)
logPrize("Виклик функції")