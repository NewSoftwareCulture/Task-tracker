import jwt from 'jsonwebtoken';
import get from 'lodash/get';
import TokenModel from '../models/TokenModel';

class TokenService {
  generate({ _id }) {
    const { access, refresh } = process.env.JWT;
    const accessToken = jwt.sign({ _id }, access, {
      expiresIn: '1h'
    });

    const refreshToken = jwt.sign({ _id }, refresh);
    return {
      accessToken,
      refreshToken,
      expiresIn: 3600
    };
  }

  async save(userId, refreshToken) {
    const data = await TokenModel.findOne({ user: userId });

    if (data) {
      data.refreshToken = refreshToken;
      return data.save();
    }

    const token = await TokenModel.create({ user: userId, refreshToken });
    return token;
  }

  async create(_id) {
    const tokens = this.generate({ _id });
    await this.save(_id, tokens.refreshToken);
    return {
      ...tokens,
      userId: _id
    };
  }

  async findOne(refreshToken) {
    try {
      const data = await TokenModel.findOne({ refreshToken }).lean();
      return data;
    } catch (error) {
      return null;
    }
  }

  validateRefresh(refreshToken) {
    try {
      const { refresh } = process.env.JWT;
      return jwt.verify(refreshToken, refresh);
    } catch (error) {
      return null;
    }
  }

  validateAccess(accessToken) {
    try {
      const { access } = process.env.JWT;
      return jwt.verify(accessToken, access);
    } catch (error) {
      return null;
    }
  }

  isTokenInvalid({ data, dbToken }) {
    return !data || !dbToken || data._id !== get(dbToken, 'user');
  }
}

export default new TokenService();
