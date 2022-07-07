"""empty message

Revision ID: 47f7b9c42f71
Revises: 6b4c50c71d3d
Create Date: 2022-07-07 13:14:36.375937

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '47f7b9c42f71'
down_revision = '6b4c50c71d3d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('User',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('last_name', sa.String(length=80), nullable=False),
    sa.Column('age', sa.Integer(), nullable=True),
    sa.Column('band', sa.Boolean(), nullable=False),
    sa.Column('description', sa.String(length=250), nullable=False),
    sa.Column('experience', sa.Boolean(), nullable=False),
    sa.Column('artist_name_or_band_name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.drop_table('user')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('email', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('password', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='user_pkey'),
    sa.UniqueConstraint('email', name='user_email_key')
    )
    op.drop_table('User')
    # ### end Alembic commands ###
