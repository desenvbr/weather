import { alpha , createStyles , makeStyles , Theme } from "@material-ui/core/styles";

export const useFindLocationCSS = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.background.paper, 0.50),
            '&:hover': {
                backgroundColor: alpha(theme.palette.background.paper, 0.80),
            },
        },
        inputRoot: {
            color: 'inherit',
            width: '90%',
        },
        inputInput: {
            margin: theme.spacing(0.3, 0, 0, 0.2),
            width: '100%',
        },
        inputIcon: {
            margin: theme.spacing(1, 0, 0, 1),
            fontSize: 30,
            width:theme.spacing(2)
        }
    }),
);