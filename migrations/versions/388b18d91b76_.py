"""empty message

Revision ID: 388b18d91b76
Revises: d136db704d00
Create Date: 2022-07-15 16:55:32.796136

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '388b18d91b76'
down_revision = 'd136db704d00'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('avatar', sa.String(length=250), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'avatar')
    # ### end Alembic commands ###
