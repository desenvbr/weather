import { useTheme } from "@material-ui/core";
import {alpha} from "@material-ui/core/styles";

//Components
import { Grid12 , Grid6  } from "../../../common/grid";
import { TypographyCustom } from "../../../common/typography";

//I18N
import intl from "react-intl-universal";

//Utils
import {getTempColor} from "../../../../utils/getTempColor";
import {getTempUnit} from "../../../../utils/getTempUnit";

export function TodayWeather(props:any){
    const theme = useTheme();

    return(
        <Grid12 style={{
            paddingTop:theme.spacing(2),
            paddingBottom:theme.spacing(2),
            backgroundColor:alpha(getTempColor(props.temp), 0.5)
        }}>
            <Grid6 justifyContent={'center'}>
                <p>Entra o ICON aqui</p>
            </Grid6>
            <Grid6>
                <Grid12>
                    <TypographyCustom variant={'h2'}>
                        {intl.get('today')}
                    </TypographyCustom>
                </Grid12>
                <Grid12>
                    <TypographyCustom variant={'h1'}
                                      style={{cursor:'pointer'}}
                                      onClick={()=>{

                                      }}>
                        {Number(props.temp).toFixed(0)}{getTempUnit(props.typeTemp)}
                    </TypographyCustom>
                </Grid12>
                <Grid12>
                    <TypographyCustom variant={'h1'}>
                        {intl.get('today')}
                    </TypographyCustom>
                </Grid12>
            </Grid6>
        </Grid12>
    )
}