import React from 'react';
import {StyleSheet, View, Animated, SafeAreaView} from 'react-native';
import { COLORS, SIZES } from '../../store/constant/theme';



const CustomView = ({flex,
    flexGrow,
    columnGap,
    rowGap,
    row,
    column,
    center,
    middle,
    left,
    right,
    top,
    bottom,
    card,
    shadow,
    elevation,
    color,
    primary,
    secondary,
    tertiary,
    borderColor,
    borderWidth,
    black,
    white,
    error,
    success,
    margin,
    padding,
    space,
    radius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    wrap,
    animated,
    theme,
    safe,
    style,
    children,
    background,
    height, width,
    round
    }) => {
    const handleMargins = () => {
        
        if (typeof margin === 'number') {
            return {
                marginTop: margin,
                marginRight: margin,
                marginBottom: margin,
                marginLeft: margin
            };
        }

        if (typeof margin === 'object') {
            const marginSize = Object.keys(margin).length;
            switch (marginSize) {
                case 1:
                    return {
                        marginTop: margin[0],
                        marginRight: margin[0],
                        marginBottom: margin[0],
                        marginLeft: margin[0]
                    };
                case 2:
                    return {
                        marginTop: margin[0],
                        marginRight: margin[1],
                        marginBottom: margin[0],
                        marginLeft: margin[1]
                    };
                case 3:
                    return {
                        marginTop: margin[0],
                        marginRight: margin[1],
                        marginBottom: margin[2],
                        marginLeft: margin[1]
                    };
                default:
                    return {
                        marginTop: margin[0],
                        marginRight: margin[1],
                        marginBottom: margin[2],
                        marginLeft: margin[3]
                    };
            }
        }
    };

    const handlePaddings = () => {
       
        if (typeof padding === 'number') {
            return {
                paddingTop: padding,
                paddingRight: padding,
                paddingBottom: padding,
                paddingLeft: padding
            };
        }

        if (typeof padding === 'object') {
            const paddingSize = Object.keys(padding).length;
            switch (paddingSize) {
                case 1:
                    return {
                        paddingTop: padding[0],
                        paddingRight: padding[0],
                        paddingBottom: padding[0],
                        paddingLeft: padding[0]
                    };
                case 2:
                    return {
                        paddingTop: padding[0],
                        paddingRight: padding[1],
                        paddingBottom: padding[0],
                        paddingLeft: padding[1]
                    };
                case 3:
                    return {
                        paddingTop: padding[0],
                        paddingRight: padding[1],
                        paddingBottom: padding[2],
                        paddingLeft: padding[1]
                    };
                default:
                    return {
                        paddingTop: padding[0],
                        paddingRight: padding[1],
                        paddingBottom: padding[2],
                        paddingLeft: padding[3]
                    };
            }
        }
    };

    const blockStyles = [
        styles.block,
        flex && {flex: 1},
        !flex && {flex: 0}, 
        flexGrow && {flexGrow},
        rowGap && {rowGap},
        columnGap && {columnGap},
        row && styles.row,
        column && styles.column,
        center && styles.center,
        middle && styles.middle,
        left && styles.left,
        right && styles.right,
        top && styles.top,
        round && styles.round,
        bottom && styles.bottom,
        margin && {...handleMargins()},
        padding && {...handlePaddings()},
        card && styles.card,
        shadow && styles.shadow,
        space && {justifyContent: `space-${space}`},
        wrap && {flexWrap: 'wrap'},
        borderColor && {borderColor:borderColor},
        borderWidth && {borderWidth:borderWidth},
        radius && {borderRadius: radius},
        borderBottomLeftRadius && {borderBottomLeftRadius: borderBottomRightRadius},
        borderBottomRightRadius && {borderBottomRightRadius: borderBottomRightRadius},
        width && {width},
        height && {height},
        // color shortcuts
        primary && {backgroundColor: COLORS.primary},
        secondary && {backgroundColor: COLORS.secondary},
        tertiary && {backgroundColor: COLORS.tertiary},
        black && {backgroundColor: COLORS.black},
        white && {backgroundColor: COLORS.white},
        error && {backgroundColor: COLORS.error},
        success && {backgroundColor: COLORS.success},
        background && {backgroundColor: COLORS.background},
        color && {backgroundColor: color}, // custom backgroundColor
        style // rewrite predefined styles
    ];

    if (animated) {
        return (
            <Animated.View style={blockStyles}>
                {children}
            </Animated.View>
        );
    }

    if (safe) {
        return (
            <SafeAreaView style={blockStyles} >
                {children}
            </SafeAreaView>
        );
    }

    return (
        <View style={blockStyles} >
            {children}
        </View>
    );
};

export const styles = StyleSheet.create({
    block: {
        flex: 1
    },
    
    row: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column'
    },
    card: {
        borderRadius: SIZES.radius
    },
    center: {
        alignItems: 'center'
    },
    middle: {
        justifyContent: 'center'
    },
    spaced: {
        justifyContent: 'space-between'
    },
    left: {
        justifyContent: 'flex-start'
    },
    right: {
        justifyContent: 'flex-end'
    },
    top: {
        justifyContent: 'flex-start'
    },
    bottom: {
        justifyContent: 'flex-end'
    },
    shadow: {
        shadowColor: COLORS.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 13,
        elevation: 2
    },
    round: {
        borderRadius: 100+'%',
        justifyContent: 'center', 
        alignItems: 'center' ,
    },
    accent: {backgroundColor: COLORS.accent},
    primary: {backgroundColor: COLORS.primary},
    secondary: {backgroundColor: COLORS.secondary},
    tertiary: {backgroundColor: COLORS.tertiary},
    black: {backgroundColor: COLORS.black},
    white: {backgroundColor: COLORS.white},
    background: {backgroundColor: COLORS.background}
});

export default CustomView;
