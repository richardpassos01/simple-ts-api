import {
    FORBIDDEN,
    NOT_FOUND,
    UNAUTHORIZED,
    UNPROCESSABLE_ENTITY,
    INTERNAL_SERVER_ERROR
} from 'http-status-codes';

import CustomError from './CustomError';
import errorCodes from './error-codes';

const errors = {
    generic: {
        internalServerError: () =>
            new CustomError({
                message: 'Internal Server Error',
                code: errorCodes.generic.INTERNAL_SERVER_ERROR,
                statusCode: INTERNAL_SERVER_ERROR
            }),
        notFound: () =>
            new CustomError({
                message: 'Not found',
                code: errorCodes.generic.NOT_FOUND,
                statusCode: NOT_FOUND
            }),
        unprocessableEntity: () =>
            new CustomError({
                message: 'Unprocessable entity',
                statusCode: UNPROCESSABLE_ENTITY,
                code: errorCodes.generic.UNPROCESSABLE_ENTITY
            }),
        unauthorized: () =>
            new CustomError({
                message: 'Unauthorized',
                statusCode: UNAUTHORIZED,
                code: errorCodes.generic.UNAUTHORIZED
            }),
        forbidden: () =>
            new CustomError({
                message: 'Forbidden',
                statusCode: FORBIDDEN,
                code: errorCodes.generic.FORBIDDEN
            })
    }
};

export default errors;
