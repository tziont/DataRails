export interface Step{
            label:string;
            type:string;
            title:string;
            htmlHeaderContent?:string;
            placeholder?:string;
            footerText?: string;
            isMandatoryToFill?:boolean;
            options?:[];
            isSkipable?:boolean;
            }