import '../styles/titleStyles.css';


interface TitleProps {
    text: string;
}

export function Title ({text}: TitleProps) {
    return (
        <h1 className="title">{text}</h1>
    )
    }